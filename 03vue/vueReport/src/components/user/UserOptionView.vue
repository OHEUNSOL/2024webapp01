<template>
  <div class="menuPlaceWrap d-flex">
    <div class="menu">
      <h2>menu</h2>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >한식</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >중식</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDisabled"
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >일식</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >양식</label
        >
      </div>
    </div>

    <div class="place">
      <h2>place</h2>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >부평구</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >서구</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDisabled"
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >중구</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >남구</label
        >
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >동구</label
        >
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >계양구</label
        >
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckCheckedDisabled"
          checked
          disabled
        />
        <label class="form-check-label" for="flexSwitchCheckChecked"
          >미추홀구</label
        >
      </div>
    </div>
    <div class="btn btn-primary" @click="search">search</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
