# BeyondJS Text Bundle and Processor

## Overview

The BeyondJS Text Bundle and Processor are designed to handle text resources efficiently within a BeyondJS application.
This bundle is ideal for managing multilanguage text files and integrating them seamlessly into your application. It
processes text files and generates the necessary JavaScript code to access these texts within your application.

## Features

-   **Multilanguage Support**: Efficiently manage and integrate multilanguage text files.
-   **Dynamic Code Generation**: Automatically generates JavaScript code to access text resources.
-   **Flexible Configuration**: Supports various configurations to tailor text processing to your needs.
-   **Seamless Integration**: Easily integrates text resources into your BeyondJS application.

## How It Works

The Text Bundle processes text files, typically JSON files, and generates JavaScript code that allows you to access
these text resources dynamically within your application. It supports multilanguage configurations based on the
languages defined in the `languages` property of the `package.json` file.

### Configuration

To configure a Text Bundle, define it directly in your module's `module.json` file. Below is an example configuration:

```json
{
	"name": "my-text-module",
	"txt": {
		"files": ["*"],
		"multilanguage": true
	}
}
```

### Key Properties

-   **`txt`**: Contains configuration details specific to the Text Bundle.
    -   **`files`**: Specifies the text files to be processed, supporting glob patterns.
    -   **`multilanguage`**: Enables multilanguage support based on the `languages` property in `package.json`.

### Example `package.json`

Here’s an example of a `package.json` with the `languages` property:

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"languages": ["en", "es"]
}
```

### Basic JSON Text Files

Create text files for each language in the `texts` directory. Here are examples for English and Spanish:

**texts.json**

```json
{
	"en": {
		"greeting": "Hello",
		"farewell": "Goodbye"
	},
	"es": {
		"greeting": "Hola",
		"farewell": "Adiós"
	}
}
```

## Dynamic Code Generation

The Text Bundle dynamically generates JavaScript code to access the text resources. This code is optimized for efficient
text retrieval, ensuring that your application can quickly and easily access the required text resources.

### Example

Here's how to set up a module with the Text Bundle in BeyondJS:

1. **Create a `module.json` file** in your module directory with the following content:

    ```json
    {
    	"name": "my-text-module",
    	"txt": {
    		"files": ["texts/*.json"],
    		"multilanguage": true
    	}
    }
    ```

2. **Add your text files** to the `texts` directory as shown in the basic JSON text file examples.

3. **Build your project** to see the dynamically generated JavaScript code for accessing the text resources.

## Advantages of Using the Text Bundle

-   **Multilanguage Text Management**: Easily manage text resources for multiple languages within your application.
-   **Efficient Text Retrieval**: Optimizes text retrieval by generating JavaScript code that accesses text resources
    dynamically.
-   **Simplified Integration**: Reduces the complexity of integrating text resources into your application.

## Potential Use Cases

-   **Multilingual Applications**: Ideal for applications that need to support multiple languages, allowing for easy
    text management and retrieval.
-   **Content Management Systems**: Efficiently handle and display text content in various languages.
-   **Dynamic Text Updates**: Applications that require dynamic updates to text content can benefit from the Text
    Bundle's capabilities.
