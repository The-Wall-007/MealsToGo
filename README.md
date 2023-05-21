# MealsToGo

ESLINT and PRETTIER Configuration

- yarn add --dev eslint prettier @react-native-community/eslint-config 

- Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

     {
            "extends": "@react-native-community"
     }


- Add following line in scripts field in package.json file
   "lint": "eslint . --ext .js"


- To run 
    yarn lint
    
- Add rules field in .eslintrc

  "rules": {
        "prettier/prettier": [
            "error",
            {
              "singleQuote": true,
              "parser": "flow"
            }
          ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape":true
            }
        ],
        "semi": [
            "error",
            "always"
        ]
      }
    
    
- Integrates ESLint into VS Code. If you are new to ESLint check the documentation.

- Integrates Prettier Formatter for Visual Studio Code.
