import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const isSeller = user?.role === "seller";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-cyan-800'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex justify-between items-center'>
					{/* Logo Section */}
					<Link to='/' className='items-center space-x-2 flex mr-auto'>
						<img 
							src='/Sokari_white.png' 
							alt='Logo' 
							className='h-12 w-auto object-contain' 
						/>
					</Link>

					{/* Navigation Section */}
					<nav className='flex items-center gap-4'>
						<Link
							to={"/"}
							className='text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
						>
							Home
						</Link>
						<Link
							to={"/about"}
							className='text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
						>
							About Us
						</Link>
						<Link
							to={"/faq"}
							className='text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
						>
							FAQ
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-cyan-400' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-cyan-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-cyan-400 transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{isSeller && (
							<Link
								className='bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center'
								to={"/seller-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Seller Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-cyan-500 hover:bg-cyan-800 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
