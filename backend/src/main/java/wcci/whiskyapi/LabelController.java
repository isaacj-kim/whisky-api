package wcci.whiskyapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class LabelController {
	@Autowired
	LabelRepository labelRepo;
	
	private Brand brand;
	
	
	@GetMapping("/labels")
	public Iterable<Label> sendWhiskyLabels(){
		return labelRepo.findAll();
	}
	
	@GetMapping ("/labels/{id}")
	public Label sendWhiskyLabels(@PathVariable Long id) {
		return labelRepo.findById(id).get();
	}

	@PostMapping ("/add-labels")
	public Label addLabels (String labelName) {
		Label labelToAdd = new Label(labelName, brand);
		if(labelRepo.findByLabelName(labelToAdd.getLabelName())==null){
			labelRepo.save(labelToAdd);
		}
		return labelRepo.findByLabelName(labelToAdd.getLabelName());
	}
	
	
}

