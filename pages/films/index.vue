<template>
  <div class="movie-filter">
    <form @submit.prevent="applyFilters" class="filter-form">
      <h2>Filter Movies</h2>

      <div class="form-group">
        <label for="page">Page:</label>
        <input
          type="number"
          v-model.number="filters.page"
          id="page"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="limit">Limit:</label>
        <input
          type="number"
          v-model.number="filters.limit"
          id="limit"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="selectFields">Select Fields:</label>
        <input
          type="text"
          v-model="filters.selectFields"
          id="selectFields"
          class="form-control"
          placeholder="comma-separated fields"
        />
      </div>

      <div class="form-group">
        <label for="notNullFields">Not Null Fields:</label>
        <input
          type="text"
          v-model="filters.notNullFields"
          id="notNullFields"
          class="form-control"
          placeholder="comma-separated fields"
        />
      </div>

      <div class="form-group">
        <label for="sortField">Sort Field:</label>
        <input
          type="text"
          v-model="filters.sortField"
          id="sortField"
          class="form-control"
          placeholder="comma-separated fields"
        />
      </div>

      <div class="form-group">
        <label for="sortType">Sort Type:</label>
        <input
          type="text"
          v-model="filters.sortType"
          id="sortType"
          class="form-control"
          placeholder="comma-separated types"
        />
      </div>

      <div class="form-group">
        <label for="id">ID:</label>
        <input
          type="text"
          v-model="filters.id"
          id="id"
          class="form-control"
          placeholder="comma-separated IDs"
        />
      </div>

      <!-- Add additional filters here as needed -->

      <button type="submit" class="btn btn-primary">Apply Filters</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const filters = ref({
  page: 1,
  limit: 10,
  selectFields: "",
  notNullFields: "",
  sortField: "",
  sortType: "",
  id: "",
  externalId: {
    imdb: "",
    tmdb: [],
    kpHD: "",
  },
  type: "",
  typeNumber: [],
  isSeries: "",
  status: "",
  year: "",
  releaseYears: {
    start: "",
    end: "",
  },
  rating: {
    kp: "",
    imdb: "",
    tmdb: "",
  },
  ratingMpaa: "",
  ageRating: "",
  votes: {
    kp: "",
    imdb: "",
    tmdb: "",
    filmCritics: "",
    russianFilmCritics: "",
    await: "",
  },
  budget: {
    value: "",
  },
  audience: {
    count: "",
  },
  movieLength: "",
  seriesLength: "",
  totalSeriesLength: "",
  genres: {
    name: "",
  },
  countries: {
    name: "",
  },
  ticketsOnSale: "",
  networks: {
    items: {
      name: "",
    },
  },
  persons: {
    id: "",
    profession: "",
    enProfession: "",
  },
  fees: {
    world: "",
    usa: "",
    russia: "",
  },
  premiere: {
    world: "",
    usa: "",
    russia: "",
    digital: "",
    cinema: "",
    country: "",
  },
  similarMovies: {
    id: "",
  },
  sequelsAndPrequels: {
    id: "",
  },
  watchability: {
    items: {
      name: "",
    },
  },
  lists: "",
  updatedAt: "",
  createdAt: "",
});

const buildQueryParams = (params) => {
  const query = new URLSearchParams();

  const addArrayToQuery = (key, array) => {
    array.forEach((value) => query.append(key, value));
  };

  const addObjectToQuery = (key, object) => {
    for (const subKey in object) {
      if (Array.isArray(object[subKey])) {
        addArrayToQuery(`${key}.${subKey}`, object[subKey]);
      } else if (typeof object[subKey] === "object") {
        addObjectToQuery(`${key}.${subKey}`, object[subKey]);
      } else {
        query.append(`${key}.${subKey}`, object[subKey]);
      }
    }
  };

  for (const key in params) {
    const value = params[key];
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        addArrayToQuery(key, value);
      } else if (typeof value === "object") {
        addObjectToQuery(key, value);
      } else {
        query.append(key, value);
      }
    }
  }

  return query.toString();
};

const applyFilters = () => {
  const queryString = buildQueryParams(filters.value);
  console.log(queryString); // You can now use this query string to fetch data
};
</script>

<style scoped>
.movie-filter {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.filter-form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-control {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
