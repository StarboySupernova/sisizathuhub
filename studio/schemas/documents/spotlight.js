import { FcRating } from 'react-icons/fc';

export default {
  name: 'spotlight',
  title: 'Featured',
  type: 'document',
  icon: FcRating,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Upcoming News, Updates & Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every entry should be unique').unique(),
        Rule.required().error('At least one entry is required'),
      ],
    },
    {
      name: 'activity',
      title: 'Top Activities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'activity' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
};
