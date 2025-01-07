import api from '../../libs/axios';

interface Animals {
  id: number;
  name: string;
  species: {
    name: string;
  };
  photos: {
    small: string;
    medium: string;
    large: string;
    full: string;
  }[];
  description: string | null;
}

interface FetchAnimalsResponse {
  animals: Animals[];
  pagination: {
    count_per_page: number;
    total_count: number;
    current_page: number;
    total_pages: number;
  };
}

export const getAnimals = async (
  token: string
): Promise<FetchAnimalsResponse> => {
  try {
    const response = await api.get<FetchAnimalsResponse>('/animals', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw new Error('Failed to fetch pets');
  }
};
