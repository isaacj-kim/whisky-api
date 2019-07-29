    
package wcci.whiskyapi;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabelRepository extends CrudRepository<Label, Long>{

	Label findByLabelName(String LabelName);
}