export default {
    css: [
        'swiper/dist/css/swiper.css',
        '@/assets/scss/index.scss'
    ],
    build: {
        extractCSS: true,
        filenames: {
            css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css'
        }
    },
    plugins: [
        {src: '@/plugins/swiper', ssr: false},
    ]
}