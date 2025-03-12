const express = require('express');
const app = express();
const port = 3002;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost${port}`);
})

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('<h1>Server del mio blog</h1>')
})

app.get('/api/v1/bacheca', (req,res) => {

    const posts = [
        {
            title: "Ciambellone",
            content: "Questo è un delizioso ciambellone fatto in casa.",
            image: "/images/ciambellone.jpeg",
            tags: ["dolce", "ciambellone", "ricetta"]
        },
        {
            title: "Cracker di Barbabietola",
            content: "Questi sono dei croccanti cracker di barbabietola.",
            image: "/images/cracker_barbabietola.jpeg",
            tags: ["snack", "barbabietola", "salato"]
        },
        {
            title: "Pane Fritto Dolce",
            content: "Questo è un pane fritto dolce, perfetto per la colazione.",
            image: "/images/pane_fritto_dolce.jpeg",
            tags: ["dolce", "pane fritto", "colazione"]
        },
        {
            title: "Pasta alla Barbabietola",
            content: "Questa è una deliziosa pasta alla barbabietola.",
            image: "/images/pasta_barbabietola.jpeg",
            tags: ["primo piatto", "barbabietola", "pasta"]
        },
        {
            title: "Torta Paesana",
            content: "Questa è una tradizionale torta paesana.",
            image: "/images/torta_paesana.jpeg",
            tags: ["dolce", "torta", "tradizionale"]
        }
    ];

    const data = {
        success: true,
        blog: "Il mio blog",
        posts: posts
    }

    console.log(posts);
    
    res.json(data);
})
