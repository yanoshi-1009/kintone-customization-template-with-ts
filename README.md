# kintone-customization-private

## How to use

1. Make field.d.ts file by kintone-dts-gen
   `npx kintone-dts-gen --base-url https://***.cybozu.com -u <username> -p <password> --app-id <appId> -o "./src/js/fields.d.ts"`
2. Code
3. Check the type
   `npm run check-types`
4. Compile by webpack and babel
