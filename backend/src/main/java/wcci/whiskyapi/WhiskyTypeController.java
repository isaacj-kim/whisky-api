package wcci.whiskyapi;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class WhiskyTypeController {

	@Autowired
	WhiskyTypeRepository whiskyTypeRepo;

	@GetMapping("/types")
	public Iterable<WhiskyType> sendWhiskyType() {
		return whiskyTypeRepo.findAll();
		}

	@GetMapping("/types/{id}")
	public WhiskyType sendWhiskyType(@PathVariable Long id) {
		return whiskyTypeRepo.findById(id).get();
		}


}
