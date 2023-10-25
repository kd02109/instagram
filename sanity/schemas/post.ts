import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: {type: 'user'},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'sentence',
      title: 'Sentence',
      type: 'string',
      validation : Rule => Rule.required()
    }),
    defineField({
      name: 'like',
      title: 'Like',
      type: 'number',
      validation : Rule => Rule.required().integer().greaterThan(-1).min(0)
    }),
    defineField({
      name: 'createdAt',
      title: 'createdAt',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
  ],

  preview: {
    select: {
      mainImage: 'mainImage',
      user: 'user.name',
      sentence: 'sentence',
    },
    prepare(selection) {
      const {user} = selection
      return {...selection, subtitle: user && `by ${user}`}
    },
  },
})
