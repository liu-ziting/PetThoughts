# 我知道你的宠物在想什么

中文 | [English](README_en.md)

Live demo:

-   Netlify：[我知道你的宠物在想什么](https://iknowwhatyourcatisthinking.netlify.app)
-   Vercel：[我知道你的宠物在想什么](https://pet-thoughts.vercel.app)

## 简介

【我知道你的宠物在想什么】 是一个基于 Gemini Pro API 构建的图片识别应用。通过上传你宠物的照片，该应用能够智能分析你的宠物的表情和环境，并推测出它们可能在想些什么。

### 功能特点

-   图片识别：利用 Gemini-pro-vision 的图像识别技术，能够准确地识别宠物的表情和环境。
-   表情分析：通过分析宠物的表情 Gemini-pro-vision 可以推测出宠物可能的情绪状态，如开心、惊讶、困惑等。
-   环境分析：Gemini-pro-vision 还能根据宠物所处的环境，推测出它们可能的活动场景，如户外玩耍、室内休息等。
-   自然语言处理：结合图像识别和自然语言处理技术，Gemini-pro-vision 可以将宠物的情绪和活动场景转化为可读性高的文字描述。
-   用户友好界面：提供简洁直观的用户界面，使用户能够轻松上传照片并获取宠物分析结果。

### 注意事项

请确保上传的照片清晰可见，以获得更准确的分析结果。
本应用仅适用于识别和分析常见宠物如猫、狗等，对于其他动物可能不具有准确性。
这是一款有趣实用的图片识别应用，让你更深入地了解你的宠物的情绪和喜好。无论是为了更好地照顾宠物，还是与朋友们分享宠物的趣事，这个网站都能为你带来愉悦的使用体验。

## 部署

### 使用 Netlify 部署（推荐）

[![Netlify Status](https://api.netlify.com/api/v1/badges/0d1b17c9-8e29-448b-ab8a-1a02c8952855/deploy-status)](https://app.netlify.com/sites/iknowwhatyourcatisthinking/deploys)

### 使用 Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liu-ziting/PetThoughts&env=GEMINI_API_KEY)

> 只需单击上面的按钮并按照说明即可部署您自己的应用程序副本

### 环境变量

| Name             | Description                                                                                    | Required |
| ---------------- | ---------------------------------------------------------------------------------------------- | -------- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from [here](https://makersuite.google.com/app/apikey). | yes      |

## 说明

本项目前端界面代码由 [v0.dev](http://v0.dev 'v0.dev') 生成，接口由[Google Gemini](https://deepmind.google/technologies/gemini/#introduction 'Google Gemini') 提供。

[![](https://pic.imgdb.cn/item/659b5fc9871b83018a4e656a.jpg)](https://v0.dev/t/AqOuyxMjm7u)

> [!WARNING]
> 本项目为开源项目，使用者必须在遵循 GOOGLE 的[使用条款](https://ai.google.dev/terms)以及**法律法规**的情况下使用，不得用于非法用途。
>
> 根据[《生成式人工智能服务管理暂行办法》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm)的要求，请勿对中国地区公众提供一切未经备案的生成式人工智能服务。
