import React, { useState } from "react";
import ImageTracer from "imagetracerjs";
import { SliderComponent } from "./slider";
import { PageContainer } from "./styled";

export const Page = () => {
	const [files, setFiles] = useState([]);
	const [previewUrl, setPreviewUrl] = useState(null);
	const [convertedUrl, setConvertedUrl] = useState(null);

	const handleFileChange = (event) => {
		setFiles(event.target.files);
		if (event.target.files[0]) {
			const preview = URL.createObjectURL(event.target.files[0]);
			setPreviewUrl(preview); // Ustawienie podglądu dla pierwszego wybranego pliku
		}
	};

	const convertImages = () => {
		if (files.length === 0) {
			alert("Proszę wybrać pliki obrazów do konwersji!");
			return;
		}

		Array.from(files).forEach((file) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const options = {
					pathomit: 0,
					roundcoords: 2,
					ltres: 0.5,
					qtres: 0.5,
					numberofcolors: 64,
				};

				ImageTracer.imageToSVG(
					event.target.result,
					(svgString) => {
						const blob = new Blob([svgString], { type: "image/svg+xml" });
						const url = URL.createObjectURL(blob);
						setConvertedUrl(url);
						// console.log("1", blob);
						// console.log("2", url);
						const link = document.createElement("a");
						// console.log("3", link);
						link.href = url;
						link.download = file.name.split(".")[0] + ".svg";
						// console.log("4", link.download);
						link.textContent = "Pobierz " + link.download;

						document.getElementById("output").appendChild(link);
						document
							.getElementById("output")
							.appendChild(document.createElement("br"));
					},
					options,
				);
			};
			reader.readAsDataURL(file);
		});
	};

	return (
		<PageContainer>
			<input
				type="file"
				id="fileInput"
				onChange={handleFileChange}
				multiple
				accept="image/png, image/jpeg, image/jpg"
			/>
			<button onClick={convertImages} id="convertButton">
				Konwertuj obrazy
			</button>
			<div id="output"></div>
			{/* <SliderComponent marks={true} defaultValue={20} maxValue={40} /> */}
			{/* {previewUrl && <img src={previewUrl} alt="Podgląd" />}
			{convertedUrl && <img src={convertedUrl} alt="Przekształcony Obraz" />} */}
		</PageContainer>
	);
};
