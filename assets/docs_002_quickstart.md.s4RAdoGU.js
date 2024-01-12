import{_ as s,o as a,c as i,R as t}from"./chunks/framework._hq9T-Fw.js";const c=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"docs/002_quickstart.md","filePath":"docs/002_quickstart.md","lastUpdated":1703424583000}'),n={name:"docs/002_quickstart.md"},e=t(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><h2 id="线上尝试-danmaku-vue" tabindex="-1">线上尝试 <code>danmaku-vue</code> <a class="header-anchor" href="#线上尝试-danmaku-vue" aria-label="Permalink to &quot;线上尝试 \`danmaku-vue\`&quot;">​</a></h2><ul><li>想要快速体验 <code>danmaku-vue</code> 效果，你可以直接访问<a href="https://dshuais.github.io/danmaku-vue/" target="_blank" rel="noreferrer">预览地址</a></li></ul><h2 id="项目中使用-danmaku-vue" tabindex="-1">项目中使用 <code>danmaku-vue</code> <a class="header-anchor" href="#项目中使用-danmaku-vue" aria-label="Permalink to &quot;项目中使用 \`danmaku-vue\`&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>你需要先创建一个vue项目</li><li>已安装18.0或更高版本的<a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a></li></ul></div><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm add danmaku-vue --save</span></span></code></pre></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Danmaku </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;danmaku-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> danmus</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;danmu1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;danmu2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;danmu3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Danmaku</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :danmus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;danmus&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height:100px; width:300px;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Danmaku</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>到这里最基础的弹幕效果使用已经完成，你可以通过 <code>danmus</code> 属性传入弹幕数据，具体数据格式不做限制，详情请参考<a href="https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue" target="_blank" rel="noreferrer">demo</a></p><p>也可根据文档继续更进一步了解和学习 <code>danmaku-vue</code></p>`,11),l=[e];function h(k,p,d,r,o,E){return a(),i("div",null,l)}const g=s(n,[["render",h]]);export{c as __pageData,g as default};