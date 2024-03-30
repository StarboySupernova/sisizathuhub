import { FcComboChart } from 'react-icons/fc';

export default {
  name: 'objective',
  title: 'Objective',
  type: 'document',
  icon: FcComboChart,
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
    {
      name: 'slug',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'description',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      title: 'description',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ description, image, slug }) {
      return {
        title: description,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
