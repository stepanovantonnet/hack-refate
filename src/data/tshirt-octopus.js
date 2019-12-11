


const product = {

    slug: 'tshirt-octopus',
    payload: {
        product: [
            {
                type: 'about',
                items: [
                    {
                        photo: 't-shirt-octopus.png',
                        map: '',
                        title: 'T-Shirt Octopus',
                        description: ''
                    }
                ]
            },
            {
                type: 'company',
                items: [
                    {
                        photo: 'hnm.png',
                        map: '',
                        title: 'H&M',
                        description: 'H&M is a Swedish multinational clothing-retail company known for its fast-fashion clothing for men, women, teenagers and children.'
                    }
                ]
            },

        ],

        manufacturing: [
            {
                type: 'location',
                items: [
                    {
                        photo: '',
                        map: 'NO#38, VENG SRENG STREET, SANGKAT STUENG MEANCHEY, KHAN CHEY 11111, PHNOM PENH',
                        title: 'KAI DE GARMENT LTD',
                        description: ''
                    }
                ]
            },
            {
                type: 'components',
                items: [
                    {
                        photo: 'cotton.png',
                        title: 'Cotton',
                        description: 'Cotton is a natural, renewable and biodegradable fibre, popular in clothing, home textiles and furniture. But it’s also linked to negative impacts on the people and the environment, it’s a climate intensive crop related to high water and chemical use, that affects both soil and biodiversity and the people working in the cotton fields.'
                    }
                ]
            },
            {
                type: 'labor',
                items: [
                    {
                        photo: '',
                        title: '',
                        description: ''
                    }
                ]
            },
        ],


        recycle: [
            {
                type: 'collection',
            },
            {
                type: 'sorting',
            },
            {
                type: 'processing',
            },
            {
                type: 'manufacturing',
            },
        ],

        waste_impact: [
            {
                type: 'decomposition',
                title: 'pastic 20,000 ',
                description: ''
            },
            {
                type: 'waste_score',
                title: 'pastic 20,000 ',
                description: ''
            },

        ]
    }
}

export const products = [
    product
];