import { motion } from "framer-motion";
import CategoryItem from "../components/CategoryItem";

const categories = [
	{ href: "/Masks", name: "Sri Lankan Masks", imageUrl: "/Masks.jpg" },
	{ href: "/Batik", name: "Batik", imageUrl: "/Batik.jpg" },
	{ href: "/Drums", name: "Sri Lankan Drums", imageUrl: "/Drums.jpg" },
	{ href: "/Carvings", name: "Stone and wood carving", imageUrl: "/WoodCarvings.jpg" },
	{ href: "/Handloom", name: "Handloom", imageUrl: "/Handloom.jpg" },
	{ href: "/Coir", name: "Coir Products", imageUrl: "/Coir.jpg" },
];

const marqueeVariantsDown = {
	animate: {
		y: [0, -600], // Scroll down
		transition: {
			y: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 15,
				ease: "linear",
			},
		},
	},
};

const marqueeVariantsUp = {
	animate: {
		y: [0, -600], // Scroll up
		transition: {
			y: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 15,
				ease: "linear",
			},
		},
	},
};

const HomePage = () => {
	return (
		<div className="relative min-h-screen text-white overflow-hidden">
			{/* Infinite Image Marquee Left */}
			<div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black via-transparent to-transparent z-0">
				<motion.div
					className="flex flex-col items-center space-y-4"
					variants={marqueeVariantsDown}
					animate="animate"
				>
					{/* Duplicate images for seamless scrolling */}
					{[...categories, ...categories].map((category, index) => (
						<motion.img
							key={`left-image-${index}`}
							src={category.imageUrl}
							alt={category.name}
							className="h-24 w-16 object-cover rounded-md shadow-lg"
							whileHover={{
								scale: 1.2, // Enlarge the image
								rotate: 5, // Slight rotation
								boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)", // Glow effect
							}}
							transition={{ type: "spring", stiffness: 300 }}
						/>
					))}
				</motion.div>
			</div>

			{/* Infinite Image Marquee Right */}
			<div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black via-transparent to-transparent z-0">
				<motion.div
					className="flex flex-col items-center space-y-4"
					variants={marqueeVariantsUp}
					animate="animate"
				>
					{/* Duplicate images for seamless scrolling */}
					{[...categories, ...categories].map((category, index) => (
						<motion.img
							key={`right-image-${index}`}
							src={category.imageUrl}
							alt={category.name}
							className="h-24 w-16 object-cover rounded-md shadow-lg"
							whileHover={{
								scale: 1.2, // Enlarge the image
								rotate: -5, // Slight rotation in opposite direction
								boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)", // Glow effect
							}}
							transition={{ type: "spring", stiffness: 300 }}
						/>
					))}
				</motion.div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-center text-5xl sm:text-6xl font-bold text-cyan-50 mb-4">
					Explore Our Categories
				</h1>
				<p className="text-center text-xl text-gray-300 mb-12">
					Discover unique, handcrafted items made by local Sri Lankan artisans, celebrating heritage and sustainable craftsmanship.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
