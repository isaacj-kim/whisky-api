package wcci.whiskyapi;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhiskyBrandRepository extends CrudRepository<WhiskyBrand, Long> {
	WhiskyBrand findByBrandName(String brandName);

}
