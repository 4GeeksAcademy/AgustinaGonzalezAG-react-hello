import React from "react";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron ";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let cards = [
		{ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh.", image: "https://thumbs.dreamstime.com/b/brown-cat-meadow-background-ai-generated-delightful-image-charming-sits-amidst-lush-surrounded-vibrant-green-grass-282159631.jpg" },
		{ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.", image: "https://th.bing.com/th/id/OIP.Gps-grs7U5jKJntRin0hGQHaFl?pid=ImgDet&w=531&h=400&rs=1" },
		{ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est velit egestas dui id." ,image: "https://th.bing.com/th/id/OIP.wXBOpXTIE4hHHCU-zrBRrQHaE8?pid=ImgDet&w=1080&h=720&rs=1"},
		{ description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed.", image: "https://th.bing.com/th/id/OIP.wJpW6d1SUL6zRpP-5WBIGAHaEo?pid=ImgDet&w=1920&h=1200&rs=1" },

		]
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{cards.map((card, index) =>
					(<div className="col-md-3 d-flex justify-content-center mb-2" key={index}>
						<Card description={card.description} image={card.image} />
					</div>)
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
};

export default Home;
