import React from 'react'

const defaultDescription = 'Rubber Duck cosplaying as a Product Designer'

const Seo = ({ title, description }: { title: string, description?: string }): JSX.Element => (
  <>
    <html lang='en' />
    <title>{title}</title>
    <meta name='description' content={description ?? defaultDescription} />
  </>
)

export default Seo
