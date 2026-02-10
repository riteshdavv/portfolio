"use client";

import React, { useRef, useState, useEffect } from "react";
import { VideoButton } from "@/components/ui/video-buttons";
import { Play, Pause, Volume2, Volume1, VolumeX, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
    value,
    onChange,
    className,
}: {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}) => {
    return (
        <motion.div
            className={cn(
                "relative w-full h-1 bg-white/20 rounded-full cursor-pointer",
                className
            )}
            onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                onChange(Math.min(Math.max(percentage, 0), 100));
            }}
        >
            <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                style={{ width: `${value}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        </motion.div>
    );
};

const VideoPlayer = ({ src, poster }: { src: string; poster?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [showControls, setShowControls] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [posterUrl, setPosterUrl] = useState<string | null>(poster || null);

    // Seek to 20s on load so the video element displays that frame as thumbnail
    // Also capture the frame as a data URL for the overlay (works on desktop)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoaded = () => {
            setDuration(video.duration);
            video.currentTime = 20;
        };

        const handleSeeked = () => {
            // Capture the frame as a poster for the overlay
            if (!poster) {
                try {
                    const canvas = document.createElement("canvas");
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext("2d");
                    if (ctx && video.videoWidth > 0) {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        setPosterUrl(canvas.toDataURL("image/jpeg", 0.85));
                    }
                } catch (e) {
                    // Canvas capture may fail due to CORS, ignore
                }
            }
            video.removeEventListener("seeked", handleSeeked);
        };

        video.addEventListener("seeked", handleSeeked);

        if (video.readyState >= 1) {
            handleLoaded();
        } else {
            video.addEventListener("loadedmetadata", handleLoaded);
            return () => {
                video.removeEventListener("loadedmetadata", handleLoaded);
                video.removeEventListener("seeked", handleSeeked);
            };
        }
    }, [poster]);

    const handleFirstPlay = () => {
        if (videoRef.current) {
            setHasStarted(true);
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        if (!hasStarted) {
            handleFirstPlay();
            return;
        }
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (value: number) => {
        if (videoRef.current) {
            const newVolume = value / 100;
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress =
                (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(isFinite(progress) ? progress : 0);
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (value: number) => {
        if (videoRef.current && videoRef.current.duration) {
            const time = (value / 100) * videoRef.current.duration;
            if (isFinite(time)) {
                videoRef.current.currentTime = time;
                setProgress(value);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) {
                setVolume(0);
            } else {
                setVolume(1);
                videoRef.current.volume = 1;
            }
        }
    };

    const toggleFullscreen = () => {
        const container = videoRef.current;
        if (!container) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            container.requestFullscreen();
        }
    };

    const setSpeed = (speed: number) => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
            setPlaybackSpeed(speed);
        }
    };

    return (
        <motion.div
            className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                className="w-full"
                onTimeUpdate={handleTimeUpdate}
                src={src}
                preload="auto"
                playsInline
                onClick={togglePlay}
            />

            {/* Initial poster overlay with play button + duration badge */}
            <AnimatePresence>
                {!hasStarted && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={handleFirstPlay}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* Poster image for mobile fallback */}
                        {posterUrl && (
                            <img
                                src={posterUrl}
                                alt="Video thumbnail"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )}

                        {/* Dark overlay for contrast */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Play button */}
                        <motion.div
                            className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Play className="h-7 w-7 text-white ml-1" fill="white" />
                        </motion.div>

                        {/* Duration badge */}
                        {duration > 0 && (
                            <div className="absolute bottom-3 right-3 z-10 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
                                {formatTime(duration)}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Normal hover controls (only after first play) */}
            <AnimatePresence>
                {hasStarted && showControls && (
                    <motion.div
                        className="absolute bottom-0 mx-auto max-w-xl left-0 right-0 p-4 m-2 bg-[#11111198] backdrop-blur-md rounded-2xl"
                        initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-white text-sm">
                                {formatTime(currentTime)}
                            </span>
                            <CustomSlider
                                value={progress}
                                onChange={handleSeek}
                                className="flex-1"
                            />
                            <span className="text-white text-sm">{formatTime(duration)}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <VideoButton
                                        onClick={togglePlay}
                                        variant="ghost"
                                        size="icon"
                                        className="text-white hover:bg-[#111111d1] hover:text-white"
                                    >
                                        {isPlaying ? (
                                            <Pause className="h-5 w-5" />
                                        ) : (
                                            <Play className="h-5 w-5" />
                                        )}
                                    </VideoButton>
                                </motion.div>
                                <div className="flex items-center gap-x-1">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <VideoButton
                                            onClick={toggleMute}
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-[#111111d1] hover:text-white"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="h-5 w-5" />
                                            ) : volume > 0.5 ? (
                                                <Volume2 className="h-5 w-5" />
                                            ) : (
                                                <Volume1 className="h-5 w-5" />
                                            )}
                                        </VideoButton>
                                    </motion.div>

                                    <div className="w-24">
                                        <CustomSlider
                                            value={volume * 100}
                                            onChange={handleVolumeChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {[0.5, 1, 1.5, 2].map((speed) => (
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        key={speed}
                                    >
                                        <VideoButton
                                            onClick={() => setSpeed(speed)}
                                            variant="ghost"
                                            size="icon"
                                            className={cn(
                                                "text-white hover:bg-[#111111d1] hover:text-white",
                                                playbackSpeed === speed && "bg-[#111111d1]"
                                            )}
                                        >
                                            {speed}x
                                        </VideoButton>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <VideoButton
                                    onClick={toggleFullscreen}
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-[#111111d1] hover:text-white ml-2"
                                >
                                    <Maximize className="h-4 w-4" />
                                </VideoButton>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default VideoPlayer;