import './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import highlight from 'highlight.js';
import { Button, Card, Input, Select, Tag } from 'antd';
import { Helmet } from '@@/plugin-helmet/exports';
import RightBottom from '@/components/RightBottom';

const languages = [
  {
    label: '语言',
    children: highlight.listLanguages().map((value) => ({ label: value, value })),
  },
] as {
  label: string;
  children: { label: string; value: string }[];
}[];

const themeItems = [
  'a11y-dark',
  'a11y-light',
  'agate',
  'an-old-hope',
  'androidstudio',
  'arduino-light',
  'arta',
  'ascetic',
  'atelier-cave-dark',
  'atelier-cave-light',
  'atelier-dune-dark',
  'atelier-dune-light',
  'atelier-estuary-dark',
  'atelier-estuary-light',
  'atelier-forest-dark',
  'atelier-forest-light',
  'atelier-heath-dark',
  'atelier-heath-light',
  'atelier-lakeside-dark',
  'atelier-lakeside-light',
  'atelier-plateau-dark',
  'atelier-plateau-light',
  'atelier-savanna-dark',
  'atelier-savanna-light',
  'atelier-seaside-dark',
  'atelier-seaside-light',
  'atelier-sulphurpool-dark',
  'atelier-sulphurpool-light',
  'atom-one-dark',
  'atom-one-dark-reasonable',
  'atom-one-light',
  'brown-paper',
  'brown-papersq.png',
  'codepen-embed',
  'color-brewer',
  'darcula',
  'dark',
  'default',
  'docco',
  'dracula',
  'far',
  'foundation',
  'github',
  'github-gist',
  'gml',
  'googlecode',
  'gradient-dark',
  'gradient-light',
  'grayscale',
  'gruvbox-dark',
  'gruvbox-light',
  'hopscotch',
  'hybrid',
  'idea',
  'ir-black',
  'isbl-editor-dark',
  'isbl-editor-light',
  'kimbie.dark',
  'kimbie.light',
  'lightfair',
  'lioshi',
  'magula',
  'mono-blue',
  'monokai',
  'monokai-sublime',
  'night-owl',
  'nnfx',
  'nnfx-dark',
  'nord',
  'obsidian',
  'ocean',
  'paraiso-dark',
  'paraiso-light',
  'pojoaque',
  'pojoaque.jpg',
  'purebasic',
  'qtcreator_dark',
  'qtcreator_light',
  'railscasts',
  'rainbow',
  'routeros',
  'school-book',
  'school-book.png',
  'shades-of-purple',
  'solarized-dark',
  'solarized-light',
  'srcery',
  'sunburst',
  'tomorrow',
  'tomorrow-night',
  'tomorrow-night-blue',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'vs',
  'vs2015',
  'xcode',
  'xt256',
  'zenburn',
];

export default () => {
  const [language, setLanguage] = useState('less');
  const [theme, setTheme] = useState('default');
  const [result, setResult] = useState<HighlightResult | null>(null);
  const [code, setCode] = useState(`.icon-item:not(:first-child) {
  margin-left: 10px;
}

.icon-pointer {
  cursor: pointer;

  :hover {
    color: red;
  }
}`);

  // useEffect(() => {
  //   highlight.debugMode()
  // }, [])

  useEffect(() => {
    // 语言或者代码改变，触发重新渲染代码
    setResult(highlight.highlight(language, code, true));
  }, [language, code]);

  return (
    <PageContainer>
      <Helmet>
        <link rel="stylesheet" type="text/css" href={`/highlight.js/${theme}.css`} />
      </Helmet>
      <Card>
        <Select
          showSearch
          defaultValue={language}
          style={{ width: 200 }}
          filterOption={(input, option: any) =>
            option.children
              ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              : false
          }
          onChange={(value) => {
            setLanguage(value);
          }}
        >
          {languages.map((optGroup) => {
            return (
              <Select.OptGroup label={optGroup.label} key={optGroup.label}>
                {optGroup.children.map((option) => (
                  <Select.Option value={option.value} key={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select.OptGroup>
            );
          })}
        </Select>
        <Select
          showSearch
          defaultValue={theme}
          style={{ width: 200 }}
          filterOption={(input, option: any) =>
            option.children
              ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              : false
          }
          onChange={(value) => setTheme(value)}
        >
          {themeItems.map((value, index) => (
            <Select.Option value={value} key={index}>
              {value}
            </Select.Option>
          ))}
        </Select>
        <Input.TextArea rows={10} value={code} onChange={(e) => setCode(e.target.value)} />
      </Card>
      <pre>
        <div
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: result?.value || '' }}
        />
      </pre>
      <RightBottom title="涉及技术">
        <Tag color="#108ee9">
          <Button type="link" target="_blank" href="https://www.npmjs.com/package/highlight.js">
            highlight.js
          </Button>
        </Tag>
      </RightBottom>
    </PageContainer>
  );
};
