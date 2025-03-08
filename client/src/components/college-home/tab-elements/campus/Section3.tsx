const ShortsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M1.5 6.46289H20.5M16 1.46289L13 6.46289M9 1.46289L6 6.46289M1.5 10.9629C1.5 6.48489 1.5 4.24489 2.891 2.85389C4.282 1.46289 6.521 1.46289 11 1.46289C15.478 1.46289 17.718 1.46289 19.109 2.85389C20.5 4.24489 20.5 6.48389 20.5 10.9629C20.5 15.4409 20.5 17.6809 19.109 19.0719C17.718 20.4629 15.479 20.4629 11 20.4629C6.522 20.4629 4.282 20.4629 2.891 19.0719C1.5 17.6809 1.5 15.4419 1.5 10.9629Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);
const Section3 = () => {
    return (
        <>
            <section className="my-3 px-[8em] bg-[#f1f4ff] py-3">
                <div className="flex space-x-2 justify-center">
                    <div className="rounded-full p-2 bg-white">
                        {ShortsIcon}
                    </div>
                    <div className="text-primary font-manrope font-semibold text-lg my-auto">
                        Shorts
                    </div>
                </div>

                <div className="my-x-scroller flex overflow-x-auto space-x-4 my-7 scrollbar-hide snap-x snap-mandatory pb-4">
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>
                    <div className="snap-start shrink-0">
                        <iframe
                            width="250"
                            height="400"
                            src="https://www.youtube.com/embed/YOUR_SHORTS_VIDEO_ID"
                            title="YouTube Shorts"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className="rounded-2xl"
                        ></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Section3
