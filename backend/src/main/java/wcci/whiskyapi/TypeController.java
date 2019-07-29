package wcci.whiskyapi;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class TypeController {

	@Autowired
	TypeRepository typeRepo;

	@GetMapping("/types")
	public Iterable<Type> sendWhiskyType() {
		return typeRepo.findAll();
		}

	@GetMapping("/types/{id}")
	public Type sendWhiskyType(@PathVariable Long id) {
		return typeRepo.findById(id).get();
		}


}
