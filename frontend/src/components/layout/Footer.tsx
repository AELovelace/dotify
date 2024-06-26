import {
	NextSongButton,
	PlayButton,
	PrevSongButton,
	ProgressBar,
	playerStoreContext,
} from "@/components/player";
import { SongTitle } from "@/components/player/status";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

interface BaseFooterProps {
	content: React.ReactNode;
	className?: string;
}

export function BaseFooter({ content, className }: BaseFooterProps) {
	return (
		<div
			className={
				"fixed bottom-0 left-0 right-0 z-20 flex bg-black" + " " + className
			}
		>
			<div className="footer-content h-full w-full">{content}</div>
		</div>
	);
}

export const Footer = observer(() => {
	const player = useContext(playerStoreContext);

	function onClick() {
		player.isVisible = !player.isVisible;
	}

	return (
		<>
			{!player.isVisible && (
				<div className="fixed bottom-0 left-0 right-0 z-20 flex bg-black">
					<div className="absolute left-0 right-0 top-0 h-1">
						<ProgressBar className="[&_.slider-thumb]:hidden [&_.slider-track]:rounded-none" />
					</div>
					<div className="flex w-full items-center justify-between px-2 pt-0.5">
						<button
							disabled={player.isEmpty}
							onClick={onClick}
							className="flex-grow text-left"
						>
							<SongInfo />
						</button>
						<div className="flex h-full gap-2">
							<PrevSongButton className="hidden sm:block" />
							<PlayButton />
							<NextSongButton className="hidden sm:block" />
						</div>
					</div>
					<div></div>
				</div>
			)}
		</>
	);
});

const SongInfo = observer(function () {
	const player = useContext(playerStoreContext);
	return (
		<div className="song-info flex h-full w-full items-center pr-2">
			{player.currentSong && (
				<>
					<img
						src={player.currentSong.album.imgSrc}
						alt={`${player.currentSong.album.artist} - ${player.currentSong.album.title}`}
						className="aspect-square h-16 w-16"
					/>
				</>
			)}
			<div className="flex h-20 w-full items-center pl-2">
				<SongTitle
					title={player.currentSong?.title}
					artist={player.currentSong?.artist.name}
				/>
			</div>
		</div>
	);
});
