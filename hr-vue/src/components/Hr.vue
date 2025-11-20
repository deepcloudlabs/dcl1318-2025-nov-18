<script setup>

import Card from "./common/Card.vue";
import Row from "./common/Row.vue";
import Column from "./common/Column.vue";
import {reactive} from "vue";
import Employee, {DEPARTMENTS} from "../model/Employee.js";
import InputText from "./common/InputText.vue";
import Button from "./common/Button.vue";
import SelectBox from "./common/SelectBox.vue";
import Photo from "./common/Photo.vue";
import CheckBox from "./common/CheckBox.vue";
import Table from "./common/Table.vue";

const HR_TABLE_COLUMNS = [
  "Identity",
  "Photo",
  "Full Name",
  "Salary",
  "IBAN",
  "Birth Year",
  "Department",
  "Full Time?",
  "Operations"
];

const EMPLOYEE_FIELDS = [
  {name: "identityNo", type: "String"},
  {name: "photo", type: "Photo"},
  {name: "fullname", type: "String"},
  {name: "salary", type: "Number"},
  {name: "iban", type: "String"},
  {name: "birthYear", type: "Number"},
  {name: "department", type: "String", ui: "Badge", color: "warning"},
  {name: "fulltime", type: "Boolean", ui: "Badge", color: "primary"}
];
const hr = reactive({
  employee: new Employee({}),
  departments: DEPARTMENTS,
  employees: [],
  isPending: false
});

const HR_REST_API_BASE_URL = "http://localhost:4001/employees";

function hireEmployee() {
  fetch(HR_REST_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(hr.employee)
  }).then(res => res.json())
      .then(console.log)
      .catch(console.err)
      .finally(
          () => console.log("Fetch API Call is complete.")
      );
}

function fireEmployee(identityNo) {
  let identity = identityNo ? identityNo : hr.employee.identityNo;
  fetch(`${HR_REST_API_BASE_URL}/${identity}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json"
    }
  }).then(res => res.json())
      .then(employee => {
        hr.employee = employee;
        hr.employees = hr.employees.filter(emp => emp["identityNo"] !== identity);
      })
      .catch(console.err)
      .finally(
          () => console.log("Fetch API Call is complete.")
      );
}

function findEmployee() {
  fetch(`${HR_REST_API_BASE_URL}/${hr.employee.identityNo}`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  }).then(res => res.json())
      .then(employee => {
        hr.employee = employee;
      })
      .catch(console.err)
      .finally(
          () => console.log("Fetch API Call is complete.")
      );
}

function updateEmployee() {
  fetch(HR_REST_API_BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(hr.employee)
  }).then(res => res.json())
      .then(res => alert(JSON.stringify(res)))
      .catch(console.err)
      .finally(
          () => console.log("Fetch API Call is complete.")
      );
}

const controller = new AbortController();

async function retrieveEmployees() {
  hr.isPending = true;
  fetch(HR_REST_API_BASE_URL, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Accept": "application/json"
    }
  }).then(res => res.json())
      .then(employees => {
        hr.employees = employees;
        hr.isPending = false;
      })
      .catch(console.err)
      .finally(
          () => console.log("Fetch API Call is complete.")
      );
}

function cancelRequest() {
  controller.abort();
  hr.isPending = false;
}

function copyRow(employeeAtRow) {
  hr.employee = employeeAtRow;
}

function fireEmployeeAtRow(employeeAtRow) {
  fireEmployee(employeeAtRow.identityNo);
}
</script>

<template>
  <Row>
    <Column>
      <Card title="Employee">
        <InputText id="identityNo"
                   v-model:model-value="hr.employee.identityNo"
                   label="Identity No">
          <Button label="Find"
                  @click="findEmployee"
                  color="success"/>
          <Button label="Fire"
                  @click="fireEmployee"
                  color="danger"/>
        </InputText>
        <InputText id="fullname"
                   v-model:model-value="hr.employee.fullname"
                   label="Full Name"/>
        <InputText id="salary"
                   v-model:model-value="hr.employee.salary"
                   label="Salary"/>
        <InputText id="iban"
                   v-model:model-value="hr.employee.iban"
                   label="Iban"/>
        <InputText id="birthYear"
                   v-model:model-value="hr.employee.birthYear"
                   label="Birth Year"/>
        <SelectBox id="department"
                   v-model:value="hr.employee.department"
                   :options="hr.departments"
                   label="Department"/>
        <Photo alt="Employee's photo"
               id="photo"
               label="Employee's photo"
               v-model:value="hr.employee.photo"
               :displayOnly="false"/>
        <CheckBox id="fulltime"
                  label="Full Time"
                  v-model:value="hr.employee.fulltime"/>
        <div class="mb-3">
          <Button label="Hire"
                  @click="hireEmployee"
                  color="success"/>
          <Button label="Update"
                  @click="updateEmployee"
                  color="warning"/>
        </div>
      </Card>
    </Column>
    <Column>
      <Card title="Employees">
        <Row>
          <Column>
            <Button label="Retrieve Employees"
                    @click="retrieveEmployees"
                    color="success"/>
            <Button label="Cancel"
                    v-if="hr.isPending"
                    @click="cancelRequest"
                    color="danger"/>
          </Column>
        </Row>
        <Row>
          <Column>
            <Table :items="hr.employees"
                   :rowClick="copyRow"
                   :operationClick="fireEmployeeAtRow"
                   operationName="Fire"
                   :columns="HR_TABLE_COLUMNS"
                   :fields="EMPLOYEE_FIELDS">
            </Table>
          </Column>
        </Row>
      </Card>
    </Column>
  </Row>
</template>

<style scoped>

</style>