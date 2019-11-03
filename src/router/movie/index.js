export default {
    path:'/movie',
    component :()=>import ('@/views/Movie'),
    children: [
        {
            path:'city',
            component:()=>import ('@/components/City')
        },
        {
            path:'nowPlaying',
            component:()=>import ('@/components/nowPlaying')
        },
        {
            path:'comingSoon',
            component:()=>import ('@/components/comingSoon')
        },
        {
            path:'Search',
            component:()=>import ('@/components/Search')
        },
        {
            path:'/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}