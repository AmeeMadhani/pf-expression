'use client';

// Import necessary modules
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Button } from '@nextui-org/button';
import { Spacer, Textarea } from '@nextui-org/react';
import axios from 'axios'; // Add this import

const fileTypes = ['jpg', 'jpeg', 'png'];

function DragDrop({ onPrediction }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleChange = (file) => {
    setFile(file);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('query', description);

    try {
      const response = await axios.post('http://localhost:7644/predict', formData, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        }
      });

      if (response.status === 200) {
          const responseData = {
          prediction: response.data.prediction,
          time: response.data.time,
          image: file, // Pass the File object directly
        };

        console.log('Prediction data:', responseData);
        onPrediction(responseData);
        setFile(null);
        setDescription('');
      } else {
        console.error('Error submitting prediction data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <form className="flex w-full items-center text-white ">
      

      <div className=" rounded-md bg-[#4A4B4B] border-gray-400 flex items-center justify-center w-fit text-white ">
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} className="text-white bg-transparent rounded-2xl" />
      </div>

      <Spacer x={2} />

      <Button
        type="submit"
        color="danger"
        variant="shadow"
        className="w-fit "
        onClick={handleButtonClick}
      >
        Submit
      </Button>
    </form>
  );
}

export default DragDrop;