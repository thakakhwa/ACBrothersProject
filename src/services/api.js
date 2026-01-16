/**
 * ACBrothers API Service
 * 
 * This service handles all communication with the Drupal backend.
 * Configure the DRUPAL_API_URL environment variable to point to your Drupal instance.
 */

const API_BASE_URL = import.meta.env.VITE_DRUPAL_API_URL || 'http://localhost:8080/jsonapi';

/**
 * Base fetch wrapper with error handling
 */
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

/**
 * Content API methods
 */
export const contentAPI = {
  /**
   * Get all pages
   */
  async getPages() {
    return fetchAPI('/node/page');
  },

  /**
   * Get a single page by ID
   */
  async getPage(id) {
    return fetchAPI(`/node/page/${id}`);
  },

  /**
   * Get page by path alias
   */
  async getPageByPath(path) {
    return fetchAPI(`/node/page?filter[path.alias]=${encodeURIComponent(path)}`);
  },

  /**
   * Get all services
   */
  async getServices() {
    return fetchAPI('/node/service');
  },

  /**
   * Get a single service by ID
   */
  async getService(id) {
    return fetchAPI(`/node/service/${id}`);
  },
};

/**
 * Form submission API
 */
export const formsAPI = {
  /**
   * Submit contact form
   */
  async submitContactForm(data) {
    return fetchAPI('/webform_submission/contact', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          type: 'webform_submission--contact',
          attributes: {
            data: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              message: data.message,
            },
          },
        },
      }),
    });
  },
};

/**
 * Media API methods
 */
export const mediaAPI = {
  /**
   * Get all images
   */
  async getImages() {
    return fetchAPI('/media/image');
  },

  /**
   * Get image by ID
   */
  async getImage(id) {
    return fetchAPI(`/media/image/${id}`);
  },
};

/**
 * Taxonomy API methods
 */
export const taxonomyAPI = {
  /**
   * Get service categories
   */
  async getServiceCategories() {
    return fetchAPI('/taxonomy_term/service_category');
  },
};

export default {
  content: contentAPI,
  forms: formsAPI,
  media: mediaAPI,
  taxonomy: taxonomyAPI,
};
