# 我知道你的宠物在想什么

[English](README.md) | 中文

Live demo:[我知道你的宠物在想什么](https://iknowwhatyourcatisthinking.netlify.app)

<img src="https://iknowwhatyourcatisthinking.netlify.app/demo.jpg"/>

## 简介

【我知道你的宠物在想什么】 是一个基于 Gemini Pro API 构建的图片识别项目，通过上传你宠物的照片，该项目能够智能分析你的宠物的表情和环境，并推测出它们可能在想些什么。

### 功能特点

-   图片识别：利用 Gemini-pro-vision 的图像识别技术，能够准确地识别宠物的表情和环境。
-   表情分析：通过分析宠物的表情 Gemini-pro-vision 可以推测出宠物可能的情绪状态，如开心、惊讶、困惑等。
-   环境分析：Gemini-pro-vision 还能根据宠物所处的环境，推测出它们可能的活动场景，如户外玩耍、室内休息等。
-   自然语言处理：结合图像识别和自然语言处理技术，Gemini-pro-vision 可以将宠物的情绪和活动场景转化为可读性高的文字描述。
-   用户友好界面：提供简洁直观的用户界面，使用户能够轻松上传照片并获取宠物分析结果。

### 注意事项

请确保上传的照片清晰可见，以获得更准确的分析结果。
本项目仅适用于识别和分析常见宠物如猫、狗等，对于其他动物可能不具有准确性。
这是一款有趣实用的图片识别项目，让你更深入地了解你的宠物的情绪和喜好。无论是为了更好地照顾宠物，还是与朋友们分享宠物的趣事，这个网站都能为你带来愉悦的使用体验。

## 部署

### 使用 Netlify 部署（推荐）

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/liu-ziting/PetThoughts)

<img src="https://iknowwhatyourcatisthinking.netlify.app/v1.png"/>

### 使用 Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liu-ziting/PetThoughts&env=GEMINI_API_KEY)

<img src="https://iknowwhatyourcatisthinking.netlify.app/v2.png"/>

> 只需单击上面的按钮并按照说明即可部署您自己的应用程序副本

### 环境变量

| Name             | Description                                                                                    | Required |
| ---------------- | ---------------------------------------------------------------------------------------------- | -------- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from [here](https://makersuite.google.com/app/apikey). | yes      |

## 开发

> 你只需要按照 Gemini 文档调整下面参数和修改成你自己需要的 Prompt 就可以了！

```javascript
// pages\api\upload.js
// generation config
const generationConfig = {
    temperature: 1,
    topK: 32,
    topP: 1,
    maxOutputTokens: 8000
}
// prompt config
const parts = [
    {
        text: '你是一位熟练的宠物语言翻译员，根据用户传的照片，你识别出是什么宠物，准确猜测宠物的情绪和想法，你可以根据宠物的肢体语言、表情、周围环境猜测宠物想说什么。翻译完后，请根据宠物的语气给出宠物的“声音”，口语自然一点，用中文回答，格式如下：🐶：<这是什么宠物><宠物的想法>。用户上传的图片中，如果没有宠物，则返回“图片中没有宠物~""'
    }
    ...
]
```

## 说明

本项目前端界面代码由 [v0.dev](https://v0.dev/t/AqOuyxMjm7u 'v0.dev') 生成，接口由[Google Gemini](https://deepmind.google/technologies/gemini/#introduction 'Google Gemini') 提供，统计分析由[Google Clarity](https://clarity.microsoft.com/projects 'Google Gemini') 支持。

> [!WARNING]
> 本项目为开源项目，使用者必须在遵循 GOOGLE 的[使用条款](https://ai.google.dev/terms)以及**法律法规**的情况下使用，不得用于非法用途。
>
> 根据[《生成式人工智能服务管理暂行办法》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm)的要求，请勿对中国地区公众提供一切未经备案的生成式人工智能服务。

## 如果有帮助

> 如果这个项目对你有帮助，可以请我喝一杯咖啡。

<img style="width:200px" src="https://iknowwhatyourcatisthinking.netlify.app/qrcode.jpg"/>

## 执照

MIT © [liu-ziting](https://github.com/liu-ziting/PetThoughts/blob/main/LICENSE.txt)
