


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
                photo: '',
                type: '1. Collection',
                description: " It is necessary that every plastic item is separated according to its make and type so that it can be processed accordingly in the shredding machine.",
            },
            {
                photo: '',
                type: '2. Processing',
                description: 'Once the sorting has been done, the plastic waste needs to be washed properly to remove impurities such as labels and adhesives. This enhances the quality of the finished product.After washing, the plastic waste is loaded into different conveyer belts that run the waste through the different shredders. These shredders tear up the plastic into small pellets, preparing them for recycling into other products.',
            },
            {
                photo: '',
                type: '3. Manufacturing',
                description: 'Plastic trimmings, offcuts and skeletal waste produced as by-products of the thermoforming process can be cumbersome and a drain on resource for those firms granulating in-house, while redundant stock of plastic trays, tubs and pots can take up valuable space, while failing to provide a return.',
            },
        ],

        waste_impact: [
            {
                type: 'decomposition',
                title: '1-5 months',
                description: ''
            },
            {
                type: 'waste_score',
                title: 1,
                description: 'Compostable'
            },

        ]
    }
}

export const products = [
    product
];