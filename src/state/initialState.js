export const initialState = {
    dialogPage: {
        users: [
            {
                id: "1",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q5uoxAszCx-zkXI5mTPFBD4Sr608Q8Ay1g&usqp=CAU",
                name: "Anna Moklyakova"
            },
            {
                id: "2",
                avatar: "https://mirhvost.ru/upload/resize_cache/iblock/9fa/500_500_1/9fa9b807b220cc6e159c720c30053772.jpg",
                name: "John Marston"
            },
            {
                id: "3",
                avatar: "https://cs11.pikabu.ru/post_img/2019/10/16/10/1571246121185355429.jpg",
                name: "Bob Williams"
            },
            {
                id: "4",
                avatar: "https://ss.metronews.ru/userfiles/materials/163/1636040/858x540.jpg",
                name: "Alina Kholodova"
            },
            {
                id: "5",
                avatar: "https://www.meme-arsenal.com/memes/2b46e5e5f59d90564fd1cb926aa144b1.jpg",
                name: "Paul Ball"
            },],
        messages: [
            {id: "1", message: "hello!"},
            {id: "2", message: "How are u?"},
            {id: "3", message: "What was the home task?"},
            {id: "4", message: "Yo"},
            {
                id: "5",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores commodi corporis cupiditate ducimus enim, eveniet exercitationem expedita pariatur provident quia quo sapiente sunt. Aliquid architecto corporis debitis dolorum harum illo nemo neque, praesentium, quas sed sequi, similique tempore unde. A ab aliquam deleniti doloribus dolorum enim expedita inventore, ipsa nam nisi, pariatur placeat praesentium quam quas quia quos tempore velit? Amet dolorem doloremque id, nobis optio quibusdam sed tempora?"
            },
        ],
    },
    profilePage: {
        info: [
            {
                id: "1",
                name: "Маша Михалкова",
                status: "Под дорогие вина жизни нашей, под действием минут, часов и дней, мы, женщины, становимся не старше, а опытней, опасней и вкусней!",
                birthday: "08.06.2001",
                relationships: "влюблена",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q5uoxAszCx-zkXI5mTPFBD4Sr608Q8Ay1g&usqp=CAU"
            },
        ],
        profilePagePost: {
            post: [{id: 1, message: "Первый пост", amountLikes: 42, amountDisLikes: 21},
                {id: 2, message: "Второй пост", amountLikes: 12, amountDisLikes: 17}
            ],
            tempPost: '',
        },
    }
}
