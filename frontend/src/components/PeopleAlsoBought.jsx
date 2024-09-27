import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState([]); //recommendations: Holds the data (product recommendations) fetched from the API. It starts as an empty array ([]).
	const [isLoading, setIsLoading] = useState(true); //A boolean that indicates whether the data is being loaded or not. It starts as true since the data hasn't been fetched yet.

	useEffect(() => { //useEffect is used to fetch the data from the API.
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations"); //Sends a GET request to the /products/recommendations endpoint.
				setRecommendations(res.data);
			} catch (error) {
				toast.error(error.response.data.message || "An error occurred while fetching recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations(); //called right after it's defined.
	}, []);

	if (isLoading) return <LoadingSpinner />; //If isLoading is true, the component returns a LoadingSpinner

	return (
		<div className='mt-8'>
			<h3 className='text-2xl font-semibold text-cyan-400'>People also bought</h3> {/*(h3) shows the text "People also bought" styled using Tailwind CSS classes (text-2xl, font-semibold, text-emerald-400).*/}
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg: grid-cols-3'>
				{recommendations.map((product) => (
					<ProductCard key={product._id} product={product} /> //ensures that each ProductCard component has a unique key, necessary for React's efficient rendering.
				))}
			</div>
		</div>
	);
};
export default PeopleAlsoBought;
