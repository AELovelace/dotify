import { ArtistWithImg, Album } from "@/components/player/types";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import Albums from "../albums";
import axios from "axios";

export const Route = createFileRoute("/artists/$artistId")({
	component: () => <Artist />,
	loader: async (params) => {
		const res = await axios.get(`/api/${params.location.pathname}`);
		return res.data;
	},
});

export interface ArtistWithAlbums {
	artist: ArtistWithImg;
	albums: Album[];
}

export function Artist() {
	const data: ArtistWithAlbums = useLoaderData({
		from: "/artists/$artistId",
		strict: true,
	});
	return (
		<div className="artist-page">
			<div className="mx-auto max-w-sm p-6 text-center">
				<img src={data.artist.imgSrc} />
				<h2 className="mt-2 text-5xl font-bold sm:text-6xl">
					{data.artist.name}
				</h2>
				<a
					className="text-neutral-300 underline underline-offset-2"
					href={data.artist.website}
				>
					{data.artist.website}
				</a>
			</div>
			<div className="border-t border-neutral-700">
				<Albums albums={data.albums} />
			</div>
		</div>
	);
}
