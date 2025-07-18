import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // 全局规则配置 - 宽松模式
    rules: {
      // 将所有错误级别的规则降级为警告级别
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-namespace": "warn",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/prefer-namespace-keyword": "warn",
      "@typescript-eslint/triple-slash-reference": "warn",
      "@typescript-eslint/type-annotation-spacing": "warn",
      "@typescript-eslint/unified-signatures": "warn",
      
      // React 相关规则
      "react/no-unescaped-entities": "warn",
      "react/no-unknown-property": "warn",
      "react/jsx-key": "warn",
      "react/jsx-no-duplicate-props": "warn",
      "react/jsx-no-undef": "warn",
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/no-array-index-key": "warn",
      "react/no-children-prop": "warn",
      "react/no-danger-with-children": "warn",
      "react/no-deprecated": "warn",
      "react/no-direct-mutation-state": "warn",
      "react/no-find-dom-node": "warn",
      "react/no-is-mounted": "warn",
      "react/no-render-return-value": "warn",
      "react/no-string-refs": "warn",
      "react/no-unescaped-entities": "warn",
      "react/no-unknown-property": "warn",
      "react/no-unsafe": "warn",
      "react/require-render-return": "warn",
      
      // 通用规则
      "no-console": "warn",
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-redeclare": "warn",
      "no-unreachable": "warn",
      "no-constant-condition": "warn",
      "no-dupe-args": "warn",
      "no-dupe-keys": "warn",
      "no-dupe-else-if": "warn",
      "no-duplicate-case": "warn",
      "no-empty": "warn",
      "no-extra-boolean-cast": "warn",
      "no-extra-semi": "warn",
      "no-func-assign": "warn",
      "no-import-assign": "warn",
      "no-obj-calls": "warn",
      "no-sparse-arrays": "warn",
      "no-unexpected-multiline": "warn",
      "no-unreachable-loop": "warn",
      "no-unsafe-finally": "warn",
      "no-unsafe-negation": "warn",
      "use-isnan": "warn",
      "valid-typeof": "warn",
    },
  },
];

export default eslintConfig;
