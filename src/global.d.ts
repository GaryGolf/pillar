/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.json' {
  const json: any;
  export = json;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}
// enviroment constant
declare const PRODUCTION: boolean;
declare const NODE_ENV: any;
