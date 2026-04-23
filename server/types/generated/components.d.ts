import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_buttons';
  info: {
    displayName: 'Hero Button';
    icon: 'cursor';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hero-button': SharedHeroButton;
      'shared.link': SharedLink;
    }
  }
}
