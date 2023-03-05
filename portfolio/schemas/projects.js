
export const projectSchema =
{
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true // <-- Defaults to false
            }
        },

    ]

}


