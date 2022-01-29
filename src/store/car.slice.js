import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../services";

export const getAllCars = createAsyncThunk(
    "carSlice/getAllCars",
    async (_, {rejectWithValue}) => {
        try {
            return await carsService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createNewCar = createAsyncThunk(
    "carSlice/createNewCar",
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    "carSlice/deleteCar",
    async ({id}, {dispatch}) => {
        try {
            await carsService.deleteById(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    "carSlice/updateCarThunk",
    async ({id, data}, {dispatch}) => {
        try {
            await carsService.updateById(id, data);
            const updatedCars = await carsService.getAll();
            dispatch(update(updatedCars));
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState: {
        cars: [],
        status: null,
        error: null,
        carToUpdate: {}
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        getCarForUpdate: (state, action) => {
            state.carToUpdate = action.payload.props.car;
        },
        update: (state, action) => {
            state.cars = action.payload;
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer;
export default carReducer;

export const {addCar, deleteCar, getCarForUpdate, update} = carSlice.actions;