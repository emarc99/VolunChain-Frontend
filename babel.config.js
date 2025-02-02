module.exports = {
    presets: [    "next/babel", 
        "@babel/preset-env", 
        {
            "modules": "commonjs"
          },
        "@babel/preset-react", 
        "@babel/preset-typescript"],
        plugins: [
            'babel-plugin-styled-components',
            '@babel/plugin-proposal-class-properties',
          ]    
  };