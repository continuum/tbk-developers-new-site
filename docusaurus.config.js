// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const organizationName = "continuum";
const projectName = "tbk-developers-new-site";

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Transbank Developers',
  tagline: 'Transbank Developers are cool',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'custom-myAwesomeNavbarItem', 
          position: "left",
          itemProp: 44, 
          anotherProp: "xyz"
        },
        /*
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
          to: '/blog',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Productos',
            items: [
              {
                label: 'Webpay',
                href: '#',
              },
              {
                label: 'Ecosistema QR - Onepay',
                href: '#',
              },
              {
                label: 'Patpass',
                href: '#',
              },
              {
                label: 'POS Integrado',
                href: '#',
              },
            ],
          },
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                href: '#',
              },
              {
                label: 'SDK Global',
                href: '#',
              },
              {
                label: 'SDK POS',
                href: '#',
              },
              {
                label: 'Plugins',
                href: '#',
              },
              {
                label: 'Recursos Gráficos',
                href: '#',
              },
            ],
          },
          {
            title: 'Ayuda y soporte',
            items: [
              {
                label: 'Soporte y comunidad Slack',
                href: '#',
              },
              {
                label: 'Preguntas frecuentes',
                href: '#',
              },
              {
                label: 'Formulario de contacto',
                href: '#',
              },
              {
                label: 'Déjanos tus ideas en GitHub',
                href: '#',
              },
              {
                label: 'Canal de youtube',
                href: '#',
              },
            ],
          },
          {
            title: 'Lista de integradores',
            items: [
              {
                label: 'Listado de Integradores',
                href: '#',
              },
              {
                label: 'Soluciones ingregrales',
                href: '#',
              }
            ],
          },
          {
            title: 'Referencia API',
            items: [],
          }
        ],
        copyright: `© 2023. Hecho con amor por CumbreGroup, Continuum y Transbank.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
        config: {
          webpayPlus: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/WebpayPlus.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/WebpayPlus", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
              categoryLinkSource: "tag"
            },
          },
          webpayPlusMall: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/WebpayPlusMall.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/WebpayPlusMall", // output directory for generated *.mdx and sidebar.js files
          },
          oneclick: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/Oneclick.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/Oneclick", // output directory for generated *.mdx and sidebar.js files
          },
          transaccionCompleta: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/Transaccion Completa.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/Transaccion Completa", // output directory for generated *.mdx and sidebar.js files
          },
          transaccionCompletaMall: { // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "examples/Transaccion Completa Mall.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/Transaccion Completa Mall", // output directory for generated *.mdx and sidebar.js files
          },

        }
      }
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        maxSearchResults: 8,
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
