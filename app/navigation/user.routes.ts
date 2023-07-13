import { Actor } from "../components/screens/actor";
import Auth from "../components/screens/auth/auth";
import { Favorites } from "../components/screens/favorites";
import { Genre } from "../components/screens/genre/genre";
import Home from "../components/screens/home/home";
import { Movie } from "../components/screens/movie/movie";
import { Profile } from "../components/screens/profile";
import { Search } from "../components/screens/search";
import { Treanding } from "../components/screens/treanding";
import { adminRoutes } from "./admin.routes";
import { IRoute } from "./navigarion.inerfaces";

export const userRoutes: IRoute[] = [
  {
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Treanding
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Genre',
		component: Genre
	},
	{
		name: 'Actor',
		component: Actor
	},
	{
		name: 'Movie',
		component: Movie
	}
];

export const routes = [...userRoutes, ...adminRoutes]
