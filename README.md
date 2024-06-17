# I Know What Your Pet Is Thinking

English | [中文](README_cn.md)

Live demo:[I Know What Your Pet Is Thinking](https://iknowwhatyourcatisthinking.netlify.app)

<img src="https://iknowwhatyourcatisthinking.netlify.app/demo.jpg"/>

## Introduction

"I Know What Your Pet Is Thinking" is an image recognition application built on the Gemini Pro API. By uploading a photo of your pet, the app can intelligently analyze your pet's facial expressions and environment, and speculate on what they might be thinking.

### Features

-   Image recognition: Using the Gemini-pro-vision's image recognition technology, it can accurately identify the pet's facial expressions and environment.
-   Facial analysis: By analyzing the pet's facial expressions, Gemini-pro-vision can infer the pet's possible emotional states, such as happiness, surprise, confusion, etc.
-   Environment analysis: Gemini-pro-vision can also infer the possible activities of pets based on their environment, such as outdoor play, indoor rest, etc.
-   Natural language processing: Combining image recognition and natural language processing technology, Gemini-pro-vision can convert the pet's emotions and activities into readable text descriptions.
-   User-friendly interface: Provides a clean and intuitive user interface that allows users to easily upload photos and get pet analysis results.

### Notes

Please make sure that the uploaded photos are clear and visible to obtain more accurate analysis results.
This application is only suitable for identifying and analyzing common pets such as cats and dogs. It may not be accurate for other animals.
This is a fun and practical image recognition application that allows you to gain a deeper understanding of your pet's emotions and preferences. Whether it's for better care of your pet or sharing interesting stories about pets with friends, this website can provide you with a pleasant user experience.

## Deployment

### Deploying with Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/liu-ziting/PetThoughts)

<img src="https://iknowwhatyourcatisthinking.netlify.app/v1.png"/>

### Deploying with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liu-ziting/PetThoughts&env=GEMINI_API_KEY)

<img src="https://iknowwhatyourcatisthinking.netlify.app/v2.png"/>

> Simply click the button above and follow the instructions to deploy your own copy of the application.

## Deployed

-   [Consumption downgrade leveling](https://cheapthing.netlify.app)
-   [I know what your baby is thinking](https://babythoughts.netlify.app)

### Environment Variables

| Name             | Description                                                                                   | Required |
| ---------------- | --------------------------------------------------------------------------------------------- | -------- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from[here](https://makersuite.google.com/app/apikey). | yes      |

## Develop

> You only need to adjust the following parameters according to the Gemini documentation and modify it to the prompt you need!

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
        text: 'You are a skilled pet language translator. Based on the photos uploaded by users, you identify what kind of pet it is and accurately guess the pet's emotions and thoughts. You can guess what the pet wants to say based on the pet's body language, expression, and surrounding environment. After the translation, please give the "voice" of the pet according to the tone of the pet. Speak more naturally and answer in Chinese. The format is as follows: 🐶: <What kind of pet is this> <What the pet is thinking>. If there is no pet in the picture uploaded by the user, it will return "There is no pet in the picture~""'
    }
    ...
]
```

## Disclaimer

The front-end code of this project is generated by [v0.dev](https://v0.dev/t/AqOuyxMjm7u 'v0.dev') ,and the interface is provided by [Google Gemini](https://deepmind.google/technologies/gemini/#introduction 'Google Gemini'),with statistical analysis powered by [Google Clarity](https://clarity.microsoft.com 'Google Clarity').

> [!WARNING]
> This project is an open-source project, and users must use it in compliance with the [Terms of Use](https://ai.google.dev/terms) of GOOGLE and applicable laws and regulations, and must not use it for illegal purposes.
>
> In accordance with the requirements of the "Interim Measures for the Administration of Generative AI Services" [issued by China's Cyberspace Administration](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm), please do not provide any unregistered generative AI services to the public in China.


## Discord

<a href="https://discord.com/invite/mc6hPwPqZ7">
    Join our Discord
</a>

## License

MIT © [liu-ziting](https://github.com/liu-ziting/PetThoughts/blob/main/LICENSE.txt)
