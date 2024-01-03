import { createRouter } from 'next-connect'
import multer from 'multer'
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai')

const API_KEY = process.env.GEMINI_API_KEY
const MODEL_NAME = 'gemini-pro-vision'

const upload = multer({
    storage: multer.memoryStorage()
})

const router = createRouter()

router.use(upload.single('image'))

router.all((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.status(200).end()
    } else {
        next()
    }
})
router.post(async (req, res) => {
    console.log('req.file:', req.file) // 添加日志
    try {
        console.log('Starting request...')
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: MODEL_NAME })

        const generationConfig = {
            temperature: 1,
            topK: 32,
            topP: 1,
            maxOutputTokens: 4096
        }

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_NONE
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE
            }
        ]

        if (!req.file) {
            console.log('No file uploaded.') // 添加日志
            return res.status(400).json({ error: 'No file uploaded.' })
        }

        const parts = [
            {
                text: '你是一位熟练的宠物语言翻译员，根据用户传的照片，你识别出是什么宠物，准确猜测宠物的情绪和想法，你可以根据宠物的肢体语言、表情、周围环境猜测宠物想说什么。翻译完后，请根据宠物的语气给出宠物的“声音”，口语自然一点，用中文回答，格式如下：🐶：<这是什么宠物><宠物的想法>。用户上传的图片中，如果没有宠物，则返回“图片中没有宠物~""'
            },
            {
                inlineData: {
                    mimeType: 'image/jpeg',
                    data: req.file.buffer.toString('base64')
                }
            }
        ]

        const result = await model.generateContent({
            contents: [{ role: 'user', parts }],
            generationConfig,
            safetySettings
        })

        if (!result) {
            console.log('No result from generateContent.') // 添加日志
            return res.status(502).json({ error: 'Bad Gateway' })
        } else {
            console.log('Result from generateContent:', result) // 添加日志
            const responseText = result.response.text()
            return res.status(200).json({ result: responseText })
        }
    } catch (error) {
        console.error('Error during request:', error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}

export default router.handler()
