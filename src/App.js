import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Produce from "./page/Produce";
import { CartContext, CartProvider } from "./context/Cart";

export default function App() {
  const Home = () => <h1>Home</h1>;
  const dataList = [
    {
      id: 1,
      imageULR: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      title: "Bloody Angels (1732 Høtten: Marerittet har et postnummer)",
      description:
        "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
      price: "$4.90"
    },
    {
      id: 2,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Mesmerist, The",
      description:
        "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
      price: "$5.08"
    },
    {
      id: 3,
      imageULR: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      title: "Red Planet",
      description:
        "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
      price: "$3.74"
    },
    {
      id: 4,
      imageULR: "http://dummyimage.com/250x250.bmp/cc0000/ffffff",
      title: "For the Bible Tells Me So",
      description:
        "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam",
      price: "$2.76"
    },
    {
      id: 5,
      imageULR: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      title: "Whatever",
      description:
        "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
      price: "$6.55"
    },
    {
      id: 6,
      imageULR: "http://dummyimage.com/250x250.png/dddddd/000000",
      title: "Way Back, The",
      description:
        "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
      price: "$8.97"
    },
    {
      id: 7,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Blood and Roses (Et mourir de plaisir) (To Die with Pleasure)",
      description:
        "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
      price: "$8.66"
    },
    {
      id: 8,
      imageULR: "http://dummyimage.com/250x250.bmp/cc0000/ffffff",
      title: "Law of Desire (Ley del deseo, La)",
      description: "urna ut tellus nulla ut erat id mauris vulputate elementum",
      price: "$0.58"
    },
    {
      id: 9,
      imageULR: "http://dummyimage.com/250x250.jpg/cc0000/ffffff",
      title: "Love at First Bite",
      description:
        "metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
      price: "$7.01"
    },
    {
      id: 10,
      imageULR: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      title: "Burrowers, The",
      description:
        "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
      price: "$9.48"
    },
    {
      id: 11,
      imageULR: "http://dummyimage.com/250x250.bmp/cc0000/ffffff",
      title: "Ordinary People",
      description:
        "primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "$4.45"
    },
    {
      id: 12,
      imageULR: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      title: "Bopha!",
      description:
        "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
      price: "$1.77"
    },
    {
      id: 13,
      imageULR: "http://dummyimage.com/250x250.bmp/cc0000/ffffff",
      title: "Antibodies (Antikörper)",
      description: "nisl venenatis lacinia aenean sit amet justo morbi ut odio",
      price: "$3.54"
    },
    {
      id: 14,
      imageULR: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      title: "Shakespeare in Love",
      description:
        "blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
      price: "$2.53"
    },
    {
      id: 15,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Code of Silence",
      description:
        "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
      price: "$0.54"
    },
    {
      id: 16,
      imageULR: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      title: "9",
      description:
        "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
      price: "$1.07"
    },
    {
      id: 17,
      imageULR: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      title: "Last Man on Earth, The (Ultimo uomo della Terra, L')",
      description:
        "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
      price: "$6.92"
    },
    {
      id: 18,
      imageULR: "http://dummyimage.com/250x250.jpg/ff4444/ffffff",
      title: "Guadalcanal Diary",
      description:
        "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut",
      price: "$0.48"
    },
    {
      id: 19,
      imageULR: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      title: "Hustle & Flow",
      description:
        "sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur",
      price: "$9.09"
    },
    {
      id: 20,
      imageULR: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
      title: "Tony",
      description:
        "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel",
      price: "$3.85"
    },
    {
      id: 21,
      imageULR: "http://dummyimage.com/250x250.png/dddddd/000000",
      title: "Seventh Heaven (Septième ciel, Le)",
      description:
        "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
      price: "$5.99"
    },
    {
      id: 22,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Lady Death",
      description:
        "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
      price: "$9.57"
    },
    {
      id: 23,
      imageULR: "http://dummyimage.com/250x250.bmp/cc0000/ffffff",
      title: "Border Run (Mule, The)",
      description:
        "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
      price: "$3.63"
    },
    {
      id: 24,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Bachelor Party, The",
      description:
        "volutpat erat quisque erat eros viverra eget congue eget semper rutrum",
      price: "$7.11"
    },
    {
      id: 25,
      imageULR: "http://dummyimage.com/250x250.bmp/ff4444/ffffff",
      title: "Santa with Muscles",
      description:
        "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "$0.40"
    },
    {
      id: 26,
      imageULR: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      title: "Adventures of Kitty O'Day (Kitty O'Day Comes Through)",
      description:
        "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
      price: "$1.71"
    },
    {
      id: 27,
      imageULR: "http://dummyimage.com/250x250.png/cc0000/ffffff",
      title: "Land",
      description:
        "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
      price: "$0.35"
    },
    {
      id: 28,
      imageULR: "http://dummyimage.com/250x250.jpg/dddddd/000000",
      title: "Decoding the Past: Secrets of the Koran",
      description:
        "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
      price: "$8.18"
    },
    {
      id: 29,
      imageULR: "http://dummyimage.com/250x250.bmp/dddddd/000000",
      title: "Manual of Love 2 (Manuale d'amore (capitoli successivi))",
      description:
        "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
      price: "$9.60"
    },
    {
      id: 30,
      imageULR: "http://dummyimage.com/250x250.png/ff4444/ffffff",
      title: "My Man Godfrey",
      description:
        "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
      price: "$5.80"
    }
  ];
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/produce">
            <Produce data={dataList} />
          </Route>
          <Route exact path="/cart">
            <CartContext.Consumer>
              {({ cartItem }) => <Produce data={cartItem} />}
            </CartContext.Consumer>
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}
