package wcci.whiskyapi.controllers;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import wcci.whiskyapi.entities.WhiskyType;
import wcci.whiskyapi.repositories.WhiskyTypeRepository;


@RestController
@RequestMapping("/api")
public class WhiskyTypeController {

	@Autowired
	WhiskyTypeRepository whiskyTypeRepo;

	@GetMapping("/types")
	@CrossOrigin
	public Iterable<WhiskyType> sendWhiskyType() {
		return whiskyTypeRepo.findAll();
		}

	@GetMapping("/types/{id}")
	public WhiskyType sendWhiskyType(@PathVariable Long id) {
		return whiskyTypeRepo.findById(id).get();
		}


}
