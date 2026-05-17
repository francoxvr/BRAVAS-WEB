export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const ConfigPartsFragmentDoc = gql`
    fragment ConfigParts on Config {
  __typename
  logo
  nav {
    __typename
    label
    href
  }
  footerDescripcion
  footerCopyright
  heroHome {
    __typename
    subtitulo
    ctaTexto
    pills
  }
  heroServicios {
    __typename
    subtitulo
    ctaTexto
    pills
  }
  heroNosotros {
    __typename
    subtitulo
    ctaTexto
    pills
  }
  heroContacto {
    __typename
    subtitulo
    ctaTexto
    pills
  }
  heroImagenes
}
    `;
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  propuestaTitulo
  propuestaSubtitulo
  propuestaItems
  enfoqueSubtitulo
  enfoqueCards {
    __typename
    emoji
    titulo
    descripcion
  }
  crecimientoTitulo
  crecimientoSubtitulo
  crecimientoCards {
    __typename
    titulo
    descripcion
    imagenes
  }
  procesoSubtitulo
  procesoSteps {
    __typename
    titulo
    descripcion
  }
  innovacionSubtitulo
  innovacionFeatures {
    __typename
    emoji
    titulo
    descripcion
  }
  innovacionImagenes
}
    `;
export const ServiciosPartsFragmentDoc = gql`
    fragment ServiciosParts on Servicios {
  __typename
  servicios {
    __typename
    titulo
    descripcion
    items
  }
  integralImagenPrincipal
  faqItems {
    __typename
    pregunta
    respuesta
  }
}
    `;
export const NosotrosPartsFragmentDoc = gql`
    fragment NosotrosParts on Nosotros {
  __typename
  quienesTitulo
  quienesDesc1
  quienesDesc2
  quienesImagen
  statProyectos
  statSatisfaccion
  statAnios
  misionTitulo
  misionDesc
  visionTitulo
  visionDesc
  porqueItems
  teamMembers {
    __typename
    nombre
    rol
    descripcion
    foto
  }
}
    `;
export const ContactoPartsFragmentDoc = gql`
    fragment ContactoParts on Contacto {
  __typename
  email
  whatsapp
  direccion
  instagram
  linkedin
}
    `;
export const ConfigDocument = gql`
    query config($relativePath: String!) {
  config(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ConfigParts
  }
}
    ${ConfigPartsFragmentDoc}`;
export const ConfigConnectionDocument = gql`
    query configConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ConfigFilter) {
  configConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ConfigParts
      }
    }
  }
}
    ${ConfigPartsFragmentDoc}`;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const ServiciosDocument = gql`
    query servicios($relativePath: String!) {
  servicios(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServiciosParts
  }
}
    ${ServiciosPartsFragmentDoc}`;
export const ServiciosConnectionDocument = gql`
    query serviciosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServiciosFilter) {
  serviciosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServiciosParts
      }
    }
  }
}
    ${ServiciosPartsFragmentDoc}`;
export const NosotrosDocument = gql`
    query nosotros($relativePath: String!) {
  nosotros(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NosotrosParts
  }
}
    ${NosotrosPartsFragmentDoc}`;
export const NosotrosConnectionDocument = gql`
    query nosotrosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NosotrosFilter) {
  nosotrosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NosotrosParts
      }
    }
  }
}
    ${NosotrosPartsFragmentDoc}`;
export const ContactoDocument = gql`
    query contacto($relativePath: String!) {
  contacto(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactoParts
  }
}
    ${ContactoPartsFragmentDoc}`;
export const ContactoConnectionDocument = gql`
    query contactoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactoFilter) {
  contactoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactoParts
      }
    }
  }
}
    ${ContactoPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    config(variables, options) {
      return requester(ConfigDocument, variables, options);
    },
    configConnection(variables, options) {
      return requester(ConfigConnectionDocument, variables, options);
    },
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    servicios(variables, options) {
      return requester(ServiciosDocument, variables, options);
    },
    serviciosConnection(variables, options) {
      return requester(ServiciosConnectionDocument, variables, options);
    },
    nosotros(variables, options) {
      return requester(NosotrosDocument, variables, options);
    },
    nosotrosConnection(variables, options) {
      return requester(NosotrosConnectionDocument, variables, options);
    },
    contacto(variables, options) {
      return requester(ContactoDocument, variables, options);
    },
    contactoConnection(variables, options) {
      return requester(ContactoConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/9d19bec7-8aea-435a-8adb-a081ce91aab9/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
