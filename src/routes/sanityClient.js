import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'tqfu5avv',
	dataset: 'production',
	useCdn: true
});

export default client;
