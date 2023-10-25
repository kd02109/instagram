import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'refreshToken',
      title: 'RefreshToken',
      type: 'slug',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
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
      name: 'follower',
      title: 'Follower',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{type: "user"}]  
        }
    ]}),
    defineField({
      name: 'following',
      title: 'Following',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [{type: "user"}]  
        }
    ]}),
  ],
  preview: {
    select: {
      user: 'name',
      email: 'email',
      profile: "image"
    },
  },
})
