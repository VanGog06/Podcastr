type PodcastDetailsType = {
  params: {
    podcastId: string;
  };
};

const PodcastDetails = ({ params }: PodcastDetailsType) => {
  return <p className="text-white-1">Podcast Details for {params.podcastId}</p>;
};

export default PodcastDetails;
