package wcci.whiskyapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import wcci.whiskyapi.entities.WhiskyBrand;
import wcci.whiskyapi.entities.WhiskyLabel;
import wcci.whiskyapi.repositories.WhiskyLabelRepository;

@RestController
@RequestMapping("/api")

public class WhiskyLabelController {
	@Autowired
	WhiskyLabelRepository whiskyLabelRepo;
	
	private WhiskyBrand whiskyBrand;
	
	
	@GetMapping("/labels")
	public Iterable<WhiskyLabel> sendWhiskyLabels(){
		return whiskyLabelRepo.findAll();
	}
	
	@GetMapping ("/labels/{id}")
	public WhiskyLabel sendWhiskyLabels(@PathVariable Long id) {
		return whiskyLabelRepo.findById(id).get();
	}

	@PostMapping ("/add-labels")
	public WhiskyLabel addLabels (String labelName) {
		WhiskyLabel labelToAdd = new WhiskyLabel(labelName, whiskyBrand);
		if(whiskyLabelRepo.findByLabelName(labelToAdd.getLabelName())==null){
			whiskyLabelRepo.save(labelToAdd);
		}
		return whiskyLabelRepo.findByLabelName(labelToAdd.getLabelName());
	}
	
	
}

