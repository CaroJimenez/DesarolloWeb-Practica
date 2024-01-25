<template>
  <b-container>
    <div>
      <b-form
        @submit.prevent="checkForm"
        action="https://vuejs.org/"
        method="post"
        novalidate
      >
        <b-alert variant="danger" dismissible :show="errors.length > 0">
          <b>{{
            errors.length > 1
              ? "Please correct the following errors:"
              : "Please correct the following error:"
          }}</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </b-alert>

        <b-row>
          <b-col md="6">
            <b-form-group
              id="name-group"
              label="Name"
              label-for="name"
              :state="name ? null : false"
            >
              <b-form-input
                id="name"
                v-model="name"
                type="text"
                name="name"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              id="lastName-group"
              label="Last Name"
              label-for="lastName"
              :state="lastname ? null : false"
            >
              <b-form-input
                id="lastName"
                v-model="lastname"
                type="text"
                name="lastName"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group id="address-group" label="Address" label-for="address">
        </b-form-group>

        <b-form-group
          id="birthdate-group"
          label="Date of Birth"
          label-for="birthdate"
          :state="validAge ? null : false"
        >
          <b-form-input
            id="birthdate"
            v-model="birthdate"
            type="date"
            name="birthdate"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="email-group"
          label="Email"
          label-for="email"
          :state="validEmail(email) ? null : false"
        >
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            name="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="phone-group"
          label="Phone Number"
          label-for="phone"
          :state="validPhone(phone) ? null : false"
        >
          <b-form-input
            id="phone"
            v-model="phone"
            type="tel"
            name="phone"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="photo-group"
          label="Photo (PNG)"
          label-for="photo"
          :state="validPhoto ? null : false"
        >
          <b-form-file
            id="photo"
            v-model="photo"
            type="file"
            accept=".png"
            @change="handleFileChange"
            required
          ></b-form-file>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      errors: [],
      name: null,
      lastname: null,
      birthdate: null,
      email: null,
      phone: null,
      photo: null,
      validAge: false,
      validPhoto: false,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name is required.");
      }

      if (!this.lastname) {
        this.errors.push("Last Name is required.");
      }

      if (!this.birthdate) {
        this.errors.push("Date of Birth is required.");
      } else {
        const today = new Date();
        const birthdate = new Date(this.birthdate);
        const age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthdate.getDate())
        ) {
          this.validAge = age - 1;
        } else {
          this.validAge = age;
        }
        if (this.validAge < 18) {
          this.errors.push("Age must be 18 or older.");
        }
      }

      if (!this.email) {
        this.errors.push("Email is required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Please enter a valid email address.");
      }

      if (!this.phone || this.phone.length < 10) {
        this.errors.push("Phone number must be at least 10 characters.");
      }

      if (!this.photo || !this.validPhoto) {
        this.errors.push("Photo is required and must be less than 3 MB.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },

    validEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    validPhone: function (phone) {
      return true;
    },

    handleFileChange(event) {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const maxSizeMB = 3;

        if (file.size > maxSizeMB * 1024 * 1024) {
          this.validPhoto = false;
          this.errors.push(`Photo size must be less than ${maxSizeMB} MB.`);
        } else {
          this.validPhoto = true;
        }
      }
    },
  },
});
</script>

<style></style>
